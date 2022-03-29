# compatibility-predictor
Compatibility Predictor for Datahouse

# My approach
*notes:*
 - *make sure to change the double quatation marks*
 - *using intelliJ as my IDE*
 - *used jsfiddle as online IDE* [https://jsfiddle.net/itsjerie/kc0sq7m3/]

To get the compatability score:
 1) Get the average of the team members' scores on each attribute
 2) Then get the absolute value of the difference of the average attribute scores divided by the average attribute scores *eqn =>* | ((Average attribute) - (Applicant's attribute score)) / (Average attribute) |
 3) Then the average of all attribute scores for each applicants will determine is they are compatible or not with the team
 4) *note that applicant's score must be in the range from 0 to 1 to pass the compatibility test*
 

# --Task Data--


# OVERVIEW
We need your help! Datahouse is looking to add new members to its team but needs your
amazing development skills to make the right decision. Your task, should you choose to accept it,
will be to build an application that takes an input: an array of applicants and an array of team
members, and produces an output: an array of applicants with their respective compatibility
score. How the compatibility score is generated is up to you. Help us make the right decision!

# SPECIFICATIONS
- Input and Output must be in JSON
- Compatibility score for each applicant should fall in a range from [0, 1]
- Use any programming language you wish to develop in.

# INSTRUCTIONS
- Upload completed project code to a public Github/Gitlab/Bitbucket repository
- Provide instructions on how your solution takes input/generates output in the
README.md of the repo
- Notify Datahouse by email when completed

# NOTES
- This assignment is deliberately open-ended. Feel free to score the applicants however
you’d like -- just be prepared to answer questions about the hows and whys!
- Ideally, we don’t want you to spend a ton of time on this -- we’d prefer if you limited this
exercise to a maximum of 2-3 hours. We’re not looking for a complete solution -- with the
open-ended nature of this exercise, that’s not really possible. Instead, whatever you’re
able to get working in that time period, we’ll be happy to go over with you.
- Please keep best-practices (your version of them) in mind while coding up your solution.
We’re just as interested in the whys behind your code structure as we are the whys
behind the applicant scores.
- Regardless of outcome, we’ll schedule a time to sit down and go over the assignment
together

*Questions? Feel free to reach out to us at either michael_endo@datahouse.com or
will_reppun@datahouse*
