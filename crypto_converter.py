print("Добро пожаловать в конвертер криптовалют!")

rates = {
    "BTC": 65000,
    "ETH": 3200,
    "USDT": 1
}

amount = float(input("Введите сумму: "))
currency = input("Введите валюту (BTC, ETH, USDT): ").upper()

def convert_to_usd(amount, currency, rates):
    if currency not in rates:
        return None
    return amount * rates[currency]

result = convert_to_usd(amount, currency, rates)
print(f"{amount} {currency} = {result} USD")

result = convert_to_usd(amount, currency, rates)

if result is None:
    print(f"Ошибка: валюта {currency} не поддерживается")
else:
    print(f"{amount} {currency} = {result} USD")

import requests

def get_live_rate(currency):
    ids = {"BTC": "bitcoin", "ETH": "ethereum", "USDT": "tether"}
    coin_id = ids.get(currency)
    if not coin_id:
        return None
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_id}&vs_currencies=usd"
    response = requests.get(url)
    data = response.json()
    return data[coin_id]["usd"]
