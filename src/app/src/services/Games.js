export function getList() {
    return fetch('https://870u95h2tb.execute-api.us-east-1.amazonaws.com/dev/games')
      .then(data => data.json())
  }