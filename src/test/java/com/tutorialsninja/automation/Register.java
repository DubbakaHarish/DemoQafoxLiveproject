package com.tutorialsninja.automation;

import com.tutorialsninja.automation.base.Base;

import cucumber.api.java.en.*;

public class Register {
	
	
	@Given("^I launch the application$")
	public void I_launch_the_application(){
		
		Base.driver.get(Base.reader.getUrl());
		
	}
	@And("^I Navigate to Account Registration page$")
	public static void I_Navigate_to_Account_Registration_page(){
		
	}
	@When("^I provid the all below valid details$")
	public static void I_provid_the_all_below_valid_details(){
		
	}
	@And("^I select the privacy policy$")
	public static void I_select_the_privacy_policy(){
		
	}
	@And("^I click on continue button$")
	public static void I_click_on_continue_button(){
		
	}@Then("^I should see that the user account has been  sucessfully created$")
	public static void I_should_see_that_the_user_account_has_been_sucessfully_created(){
		
	}

}
