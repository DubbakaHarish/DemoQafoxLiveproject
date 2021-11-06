Feature: Registration functionality scenario
	@Register @one
	Scenario: Verify weather the user is able to Register into the application by providing all the fields
	Given I launch the application
	And I Navigate to Account Registration page
	When I provid the all below valid details
	|FirstName  | Harish  								 |
	|LastName   | Dubbaka								 	 |
	|Email			| dubbakaharish4@gmail.com |
	|Telephone	| 9703716965							 |
	|Password		| H@rish450								 | 
	And I select the privacy policy
	And I click on continue button
	Then I should see that the user account has been  sucessfully created