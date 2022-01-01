1. Always start with high level view of the objects and their relationships before you deal with specific fields.


2. Never expose implementation details in your API design

3. Design your API around your business domain

4. It's easier to add rules than to remove them

5. group related fields together as a separate subject

6. Always check whethe a field should be paginated or not

7. use object refereces instead of ID fields

8. choose field names based on what makes sense and not on the implement ation

9. Use enums for fields which can only take a set of specific values

10. The API should provide business logic and not just the data 

11. Write separate mutations for separate logical actions on a resource

12. For a relationship mutation, always consider whether it would be useful to operate on multiple elements at once
13. Prefix mutation names with the object they are mutating for easy alphabetical grouping

14. Structure mutations input to reduce duplication even if this requires relaxing requiredness constraints on certain fields
