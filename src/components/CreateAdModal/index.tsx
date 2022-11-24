import React, {useEffect, useState} from 'react';
import {
    Modal,
    TouchableOpacity,
    View,
    Text,
    ModalProps,
    Button,
    Alert,
} from 'react-native';
import {THEME} from '../../theme';
import {MaterialIcons} from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import {HelperText, Dialog, Portal, Paragraph} from 'react-native-paper';
import {styles} from './styles';
import {Input} from '../Input';
import {useTimepicker} from './useTimepicker';
import moment from 'moment';
import Checkbox from 'expo-checkbox';
import {GameController} from 'phosphor-react-native';
import {} from 'react-native-paper';
import axios from 'axios';

interface Props extends ModalProps {
    onClose: () => void;
}

interface Game {
    id: string;
    title: string;
}

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const isNumber = /^([0-9]{1,100})+$/;

const successAlert = {
    title: 'Vai se preparando para o jogo',
    text: 'Seu anúncio foi criado com successo.',
};

const errorAlert = {
    title: 'Sua princesa está em outro castelo',
    text: 'Erro ao criar o anúncio.',
};

export function CreateAdModal({onClose, ...rest}: Props) {
    const [games, setGames] = useState<Game[]>([]);
    const [selectedGame, setSelectedGame] = useState<string>();
    const [yearsPlaying, setYearsPlaying] = useState<number>();
    const [errors, setErrors] = useState<boolean>(false);
    const [weekDays, setWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);
    const [name, setName] = useState<string>();
    const [discord, setDiscord] = useState<string>();
    const [visible, setVisible] = useState<boolean>(false);
    const [alertText, setAlertText] = useState({title: '', text: ''});

    const hourStart = useTimepicker();
    const hourEnd = useTimepicker();

    const handleYearsPlayedField = (value: string) => {
        const checkValue = isNumber.test(value);
        if (checkValue) {
            setYearsPlaying(Number(value));
            setErrors(false);
        } else {
            setErrors(true);
        }
    };

    const handleSelectDay = (day: string) => {
        if (weekDays.includes(day)) {
            setWeekDays(weekDays.filter((value) => value !== day));
        } else {
            setWeekDays([...weekDays, day]);
        }
    };

    const handleCreateAd = async () => {
        if (!name || !discord || !weekDays) return;

        try {
            await axios.post(
                `https://nlw-esports-jean.herokuapp.com/games/${selectedGame}/ads
        	`,
                {
                    name: name,
                    yearsPlaying: yearsPlaying,
                    discord: discord,
                    weekDays: weekDays.map(Number),
                    hourStart: moment(hourStart.time).format('HH:mm'),
                    hourEnd: moment(hourEnd.time).format('HH:mm'),
                    useVoiceChannel: useVoiceChannel,
                },
            );
            setAlertText(successAlert);
            setName(undefined);
            setWeekDays([]);
            setVisible(true);
        } catch (error) {
            setAlertText(errorAlert);
            setVisible(true);
        }
    };

    useEffect(() => {
        fetch('https://nlw-esports-jean.herokuapp.com/games').then((response) =>
            response.json().then((data) => setGames(data)),
        );
    }, []);

    const hideDialog = () => {
        setVisible(false);
        onClose();
    };

    return (
        <Modal animationType='fade' transparent statusBarTranslucent {...rest}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity
                        style={styles.closeIcon}
                        onPress={onClose}
                    >
                        <MaterialIcons
                            name='close'
                            size={25}
                            color={THEME.COLORS.CAPTION_500}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>Publique um anúncio</Text>
                    <Text style={styles.label}>Qual o game?</Text>
                    <Picker
                        selectedValue={selectedGame}
                        onValueChange={(title, id) => {
                            setSelectedGame(title);
                        }}
                        style={styles.picker}
                        dropdownIconColor={THEME.COLORS.CAPTION_500}
                        dropdownIconRippleColor={THEME.COLORS.PRIMARY}
                        mode='dropdown'
                    >
                        {games.map((game) => {
                            return (
                                <Picker.Item
                                    key={game.id}
                                    label={game.title}
                                    value={game.id}
                                    style={styles.pickerItem}
                                />
                            );
                        })}
                    </Picker>
                    <Input
                        label='Seu nome (ou nickname)'
                        placeholder='Como te chamam dentro do game?'
                        onChangeText={(value: string) => setName(value)}
                    />
                    <View>
                        <Input
                            label='Joga há quantos anos?'
                            placeholder='Tudo bem ser ZERO'
                            keyboardType='numeric'
                            onChangeText={(value) =>
                                handleYearsPlayedField(value)
                            }
                        />
                        <HelperText
                            type='error'
                            visible={errors}
                            style={{
                                position: 'absolute',
                                top: 77,
                                right: 0,
                            }}
                            padding={'none'}
                        >
                            Apenas números são permitidos.
                        </HelperText>
                    </View>
                    <Input
                        label='Qual o seu Discord?'
                        placeholder='Usuario#0000'
                        onChangeText={(value: string) => setDiscord(value)}
                    />
                    <View>
                        <Text style={styles.label}>Quando costuma jogar?</Text>
                        <View style={styles.daysGroup}>
                            {days.map((day, index) => (
                                <View key={index} style={styles.dayButton}>
                                    <Button
                                        onPress={() =>
                                            handleSelectDay(`${index}`)
                                        }
                                        title={`${day}`}
                                        color={
                                            weekDays.includes(`${index}`)
                                                ? THEME.COLORS.PRIMARY
                                                : THEME.COLORS.BACKGROUND_900
                                        }
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Qual o horário do dia?</Text>
                        <View style={styles.hourGroup}>
                            <View style={styles.hourButton}>
                                <Text style={styles.hourTitle}>De</Text>
                                <Button
                                    color={THEME.COLORS.BACKGROUND_900}
                                    title={`${moment(hourStart.time).format(
                                        'HH:mm',
                                    )}`}
                                    onPress={hourStart.showTimepicker}
                                />
                            </View>
                            <View style={styles.hourButton}>
                                <Text style={styles.hourTitle}>Até</Text>
                                <Button
                                    color={THEME.COLORS.BACKGROUND_900}
                                    title={`${moment(hourEnd.time).format(
                                        'HH:mm',
                                    )}`}
                                    onPress={hourEnd.showTimepicker}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.checkboxGroup}>
                        <Checkbox
                            value={useVoiceChannel}
                            onValueChange={setUseVoiceChannel}
                            style={styles.checkbox}
                        />
                        <Text style={styles.checkboxText}>
                            Costumo me conectar ao chat de voz
                        </Text>
                    </View>
                    <View style={styles.buttonGroup}>
                        <TouchableOpacity
                            style={styles.buttonCancel}
                            onPress={onClose}
                        >
                            <Text style={styles.buttonTitle}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonFind}
                            onPress={() => {
                                handleCreateAd();
                            }}
                        >
                            <GameController
                                size={24}
                                color={THEME.COLORS.TEXT}
                            />
                            <Text style={styles.buttonTitle}>
                                Encontrar duo
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Dialog
                        visible={visible}
                        onDismiss={hideDialog}
                        style={{
                            backgroundColor: THEME.COLORS.SHAPE,
                        }}
                    >
                        <Dialog.Title
                            style={{
                                color: THEME.COLORS.TEXT,
                                fontFamily: THEME.FONT_FAMILY.BLACK,
                                fontSize: THEME.FONT_SIZE.LG,
                            }}
                        >
                            {alertText.title}
                        </Dialog.Title>
                        <Dialog.Content>
                            <Paragraph
                                style={{
                                    color: THEME.COLORS.TEXT,
                                    fontFamily: THEME.FONT_FAMILY.REGULAR,
                                    fontSize: THEME.FONT_SIZE.SM,
                                }}
                            >
                                {alertText.text}
                            </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                onPress={hideDialog}
                                title={'Fechar'}
                                color={THEME.COLORS.PRIMARY}
                            />
                        </Dialog.Actions>
                    </Dialog>
                </View>
            </View>
        </Modal>
    );
}
