def bigger_sentence(sentence, word, ind):



    new=sentence.split(" ")


    new.insert(ind,word)


    result=" ".join(new)

    print(result)

bigger_sentence("hello there", "hi", 1)