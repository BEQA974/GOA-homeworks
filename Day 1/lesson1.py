from turtle import begin_fill, color, end_fill, exitonclick, forward, goto, left, pendown, penup, right, shape, speed, width


#we want to paint a house

#step 1:  draw a square
shape("turtle")
speed(30)
width(7)
color("black")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door
begin_fill()
forward(70)
color("brown")
left(90)
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("brown")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

color("black")
begin_fill()
left(30)
forward(100)

left(90)
forward(50)

left(90)
forward(50)

left(90)
forward(50)
end_fill()



left(90)
forward(150)

left(90)
forward(200)

left(90)
forward(100)

color("black")
begin_fill()
left(90)
forward(50)

right(90)
forward(50)

right(90)
forward(50)
end_fill()









exitonclick()