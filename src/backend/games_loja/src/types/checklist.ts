export type NumberItemValues = {
  maxValue: number
  minValue: number
  defaultValue: number | string | boolean
  label: string
  required: boolean
}

export type TextFieldItemValues = {
  maxLength: number
  minLength: number
  defaultValue?: number | string | boolean
  label: string
  required?: boolean
}

export type CheckboxItemValues = {
  defaultValue: number | string | boolean
  label: string
}

export type LabelValueType = {
  key: number
  value: string
  defaultChecked?: boolean
}

export type OptionItemValues = {
  defaultValue: number | string | boolean
  label: string
  options: LabelValueType[]
}

export type ImageItemValues = {
  url: string
}

export type ChecklistTypes =
  | 'textfield'
  | 'description'
  | 'option'
  | 'number'
  | 'checkbox'

export type FieldNames =
  | 'maxLength'
  | 'minLength'
  | 'maxValue'
  | 'minValue'
  | 'defaultValue'
  | 'label'
  | 'required'
  | 'options'

export type ChecklistItemData = {
  id: number
  type: ChecklistTypes
  errors?: any
  values: ValuesTypes
}

export type ValuesTypes = {
  maxLength?: number
  minLength?: number
  maxValue?: number
  minValue?: number
  defaultValue?: any
  label?: string
  required?: boolean
  options?: { key: number; value: string; defaultChecked?: boolean }[]
}
