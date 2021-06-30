HOW TO DESIGN DATA (HTDD)

Data definions are a driving element in the design recipes.

A data definition establishes the represent/interpret relationship between information and data:

1. Information in the program's domain is represented by data in the program.

2. Data in the program can be interpreted as information in the program's domain

A data definition must describe how to form (or make) data that satisfies the data definition and also how to tell whether a data value satisfies the data definition. It must also describe how to represent information in the program's domain as data and interpret a data value as information.

So, for example one data definition say that numbers are used to represent the SPEED of a ball. Another data definition might say that numbers are used to represent the HEIGHT of an airplane. So given a number like 6, we need a data definition to tell us how to interpret it: is it a SPEED, or a HEIGHT or something else entirely. Without a data definition, the 6 could mean anything.

---

The first step of the recipe is to identify the inherent structure of the information.

Once that is done, a data definition consists of four or five elements:

1. A possible structure definition(not until compound data)

2. A type comment that defines a new type name and describes how to form data of that type.

3. An interpretation that describes the correspondence between information and data

4. One or more examples of the data

5. A template for a 1 argument function operatig on data of this type
