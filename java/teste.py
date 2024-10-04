
def contar_palavras(palavras):
    contador = {}
    for palavra in palavras:
        if palavra in contador:
            contador[palavra] += 1
        else:
            contador[palavra] = 1
    return contador

text = input()
palavras = text.lower().split(" ")
print(contar_palavras(palavras))
