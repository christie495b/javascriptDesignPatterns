# Abstact factory pattery

Factory is a factory of several different objects while an Abstract Factory is a factory of several different factories. You create factories to manage/create objects easier.

Think about Circle, Trianlge and Square shapes. You need a factory to create those objects. Then think about Red, Green and Blue colors. You need another factory to create those objects.

Now, to be able to create those different factories  (ShapeFactory, ColorFactory) with a proper pattern, you need another factory. Which is called "AbstractFactory".

Abstract Factory -> Factories -> Objects