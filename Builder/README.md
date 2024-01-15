# Builder pattern 

The Builder pattern allows a client to construct a complex object by specifying the type and content only. Construction details are hidden from the client entirely.

## The objects participating in this pattern are:

Director -- In example code: Shop
constructs products by using the Builder's multistep interface

Builder -- not used in JavaScript
declares a multistep interface for creating a complex product

ConcreteBuilder -- In example code: CarBuilder, TruckBuilder
implements the multistep Builder interface
maintains the product through the assembly process
offers the ability to retrieve the newly created product

Products -- In example code: Car, Truck
represents the complex objects being assembled

