from turtle import*
shape("classic")
width(7)
speed(120)
bgcolor("green")
goto(0,-160)
color("cyan") #sky
begin_fill()
forward(950)
left(90)
forward(950)
left(90)
forward(1900)
left(90)
forward(950)
end_fill()
color("black")
begin_fill()
penup()
goto(-100, -160)
pendown()

left(90)#სახლი
forward(300)

left(90)
forward(200)

left(90)
forward(300)

left(90)
forward(200)
end_fill()

penup()
left(180)
forward(200)
pendown()
color("red")
begin_fill()
right(45)
forward(210)

right(90)
forward(210)
end_fill()

color("brown") #კარები
penup()
goto(0, -160)
left(45)
pendown()
begin_fill()
left(90)
forward(100)
right(90)
forward(100)
right(90)
forward(100)

end_fill()

color("black")
penup()
goto(20, -100)
pendown()
left(90)
forward(10)
right(90)
forward(10)
right(90)
forward(10)
right(90)
forward(10)

color("red") #ფანჯრები
begin_fill()
penup()
goto(-80, -40)
pendown()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()



color("red")
begin_fill()
penup()
goto(180, -40)
pendown()
forward(50)
right(90)
forward(50)
right(90)
forward(50)
right(90)
forward(50)
end_fill()

























exitonclick()