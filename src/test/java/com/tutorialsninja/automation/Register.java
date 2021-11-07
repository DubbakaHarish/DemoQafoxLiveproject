package com.tutorialsninja.automation;

import org.junit.Assert;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;
import com.tutorialsninja.automation.pages.AccountSucessPage;
import com.tutorialsninja.automation.pages.HeaderSection;
import com.tutorialsninja.automation.pages.RegisterPage;

import cucumber.api.DataTable;
import cucumber.api.java.en.*;

public class Register {
	
	HeaderSection headersection = new HeaderSection();
	RegisterPage registerpage = new RegisterPage();
	AccountSucessPage accountsucesspage = new AccountSucessPage();
	
	@Given("^I launch the application$")
	public void I_launch_the_application(){
		
		Base.driver.get(Base.reader.getUrl());
		
	}
	@And("^I Navigate to Account Registration page$")
	public static void I_Navigate_to_Account_Registration_page(){
		Elements.click(HeaderSection.myAccountLink);
		Elements.click(HeaderSection.register);
	}
	@When("^I provid the all below valid details$")
	public static void I_provid_the_all_below_valid_details(DataTable dataTable){
		
		RegisterPage.enterAllDeatails(dataTable);
	
	}
	@And("^I select the privacy policy$")
	public static void I_select_the_privacy_policy(){
		
		Elements.click(RegisterPage.privacypolicy);
		
	}
	@And("^I click on continue button$")
	public static void I_click_on_continue_button(){
		
		Elements.click(RegisterPage.ContinueButton);
		
	}@Then("^I should see that the user account has been  sucessfully created$")
	public static void I_should_see_that_the_user_account_has_been_sucessfully_created(){
		
		Assert.assertTrue(Elements.isDisplayed(AccountSucessPage.sucessBreadcrumb));
		
		
	}
	
	@Then("^I should see the user account is not created$")
	public void i_should_see_the_user_account_is_not_created(){
		
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.RegisterBreadcrumb));
		
	}
	
	@And("^I should see the error messages informing the user to fill the mondatory fields$")
	public void i_should_see_the_error_messages_informing_the_user_to_fill_the_mondatory_fields(){
		
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.firstnamewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.lastnamewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.emailwarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.telephonewarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.passwordwarning));
		Assert.assertTrue(Elements.isDisplayed(RegisterPage.mainwarning));
		
		
	}
	
	@And("^I subscribe to newsletter$")
	public void i_subscribe_to_newsletter()  {
		
		Elements.click(RegisterPage.yesToNewsletter); 
	   
	}
	
	@When("^I provide the below duplicate details into the fields$")
	public void i_provide_the_below_duplicate_details_into_the_fields(DataTable dataTable){
		

	}
	@Then("^I should see the warning message stating that the user is already created$")
	public void i_should_see_the_warning_message_stating_that_the_user_is_already_created(){
	   
	}
	    

	

}
