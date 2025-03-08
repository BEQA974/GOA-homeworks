#A Needle in the Haystack
def find_needle(haystack):
    result = haystack.index("needle")
    return f"found the needle at position {result}"


#find_needle არის ფუნქცია, რომელიც იღებს ერთ პარამეტრს haystack.
#haystack არის სია (list), რომელიც შეიცავს სხვადასხვა ელემენტებს, მათ შორის "needle"-ს.

#index("needle") მეთოდი ეძებს "needle"-ს სიაში haystack.
#თუ "needle" არსებობს სიაში, ის აბრუნებს მის ინდექსს (პოზიციას), წინააღმდეგ შემთხვევაში გამოიტანს შეცდომას (ValueError).

#f"..." არის f-string, რომელიც საშუალებას გვაძლევს ცვლადების ჩასმა სტრიქონში.
#{result} ჩასმულია, რომ კონკრეტული ინდექსი გამოჩნდეს.

