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
