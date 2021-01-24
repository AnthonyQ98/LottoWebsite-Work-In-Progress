from flask import Flask
from bs4 import BeautifulSoup
import requests

app = Flask(__name__)

@app.route("/number")
def lottoNumber():
    html_text = requests.get('https://www.lottery.ie/draw-games/results/view?game=lotto').text
    soup = BeautifulSoup(html_text, 'lxml')
    lotto = soup.find('div', class_= 'draw-results draw-results-view clearfix')
    lotto_winning_number = lotto.find('div', class_='bonus')
    lotto_winning_number_label = lotto_winning_number.find('label').text
    return {'number': str(lotto_winning_number_label)}

if __name__ == "__main__":
    app.run(debug=True)
