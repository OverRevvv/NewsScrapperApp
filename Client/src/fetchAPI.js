class Global {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  async doAjax(url) {
    try {
      const respone = await fetch(`${this.baseUrl}${url}`)
      if (respone.ok) {
        const data = await respone.json()
        return data;
      }
      else {
        throw new Error(`Response failed with status ${respone.status}`);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

const G = new Global("https://news-scrapper-app.vercel.app");

export default G;
