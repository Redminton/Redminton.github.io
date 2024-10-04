def agrupar_anagramas(palavras):
    grupos = {}
    for palavra in palavras:
        chave = ''.join(sorted(palavra))
        if chave in grupos:
            grupos[chave].append(palavra)
        else:
            grupos[chave] = [palavra]

    return list(grupos.values())

print(agrupar_anagramas(["listen", "silent", "enlist", "google", "gogole", "abc", "cab",  "ovo", "voo"]))