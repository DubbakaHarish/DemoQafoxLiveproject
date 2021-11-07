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
	
	@Register @two
	Scenario: Verify wheather the user is not allowed to register on skipping the mondatory fields
	
		Given I launch the application
		And I Navigate to Account Registration Page
		When I click on continue button
		Then I should see the user account is not created
		And I should see the error messages informing the user to fill the mondatory fields
		
	@Register @three
	Scenario: Verify weather the user is able to Register into the application by providing all the fields
		Given I launch the application
		And I Navigate to Account Registration page
		When I provid the all below valid details
		|FirstName  | Harish  								 |
		|LastName   | Dubbaka								 	 |
		|Email			| dubbakaharish4@gmail.com |
		|Telephone	| 9703716965							 |
		|Password		| H@rish450								 | 
		And I subscribe to newsletter
		And I select the privacy policy
		And I click on continue button
		Then I should see that the user account has been  sucessfully created
		
	@Register @four
	Scenario: Verify whether the user is restricted from registring a duplicate account
  	Given I launch the application
  	And I navigate to Account Registration page
  	When I provide the below duplicate details into the fields
  	|FirstName  | Harish  								 |
		|LastName   | Dubbaka								 	 |
		|Email			| dubbakaharish4@gmail.com |
		|Telephone	| 9703716965							 |
		|Password		| H@rish450								 | 
		And I select the privacy policy
		And I click on continue button
		Then I should see the warning message stating that the user is already created
	
	