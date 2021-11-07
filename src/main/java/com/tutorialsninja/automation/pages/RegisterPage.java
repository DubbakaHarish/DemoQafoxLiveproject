package com.tutorialsninja.automation.pages;

import java.util.Map;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.tutorialsninja.automation.base.Base;
import com.tutorialsninja.automation.framework.Elements;

import cucumber.api.DataTable;

public class RegisterPage {
	
	public RegisterPage(){
		
		PageFactory.initElements(Base.driver,this);
		
	}
	
	@FindBy(id="input-firstname")
	public static WebElement firstname;
	@FindBy(id="input-lastname")
	public static WebElement lastname;
	@FindBy(id="input-email")
	public static WebElement email;
	@FindBy(id="input-telephone")
	public static WebElement Telephone;
	@FindBy(id="input-password")
	public static WebElement Password1;
	@FindBy(id="input-confirm")
	public static WebElement PasswordConfirm;
	@FindBy(name="agree")
	public static WebElement privacypolicy;
	@FindBy(css="input[type='submit'][value='continue']")
	public static WebElement ContinueButton;
	//second annotation
	@FindBy(linkText="Register")
	public static WebElement RegisterBreadcrumb;
	@FindBy(css="input[id='input-firstname']+div")
	public static WebElement firstnamewarning;
	@FindBy(css="input[id='input-lastname']+div")
	public static WebElement lastnamewarning;
	@FindBy(css="input[id='input-email']+div")
	public static WebElement emailwarning;
	@FindBy(css="input[id='input-telephone']+div")
	public static WebElement telephonewarning;
	@FindBy(css="input[id='input-password']+div")
	public static WebElement passwordwarning;
	@FindBy(css="input[id='input-confirm']+div")
	public static WebElement passwordconfirmwarning;
	@FindBy(css="div[class$='alert-dismissible']")
	public static WebElement mainwarning;
	//third annotaion
	@FindBy(css="input[name='newsletter'][value='1']")
	public static  WebElement yesToNewsletter;
	
	
	public static void enterAllDeatails(DataTable dataTable){
		
		Map<String,String>map=dataTable.asMap(String.class, String.class);
		Elements.TypeText(RegisterPage.firstname,map.get("FirstName"));
		Elements.TypeText(RegisterPage.lastname, map.get("LastName"));
		Elements.TypeText(RegisterPage.email,map.get("Email"));
		Elements.TypeText(RegisterPage.Telephone,map.get("Telephone"));
		Elements.TypeText(RegisterPage.Password1, map.get("Password"));
		Elements.TypeText(RegisterPage.PasswordConfirm, map.get("Password"));
			
	}
	
	public static void enterDuplicateDeatails(DataTable dataTable){
		
		Map<String,String>map=dataTable.asMap(String.class, String.class);
		Elements.TypeText(RegisterPage.firstname,map.get("FirstName"));
		Elements.TypeText(RegisterPage.lastname, map.get("LastName"));
		Elements.TypeText(RegisterPage.email,map.get("Email"));
		Elements.TypeText(RegisterPage.Telephone,map.get("Telephone"));
		Elements.TypeText(RegisterPage.Password1, map.get("Password"));
		Elements.TypeText(RegisterPage.PasswordConfirm, map.get("Password"));
}
