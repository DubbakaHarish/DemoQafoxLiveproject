package com.tutorialsninja.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchResultsPage {
	
	@FindBy(linkText="Samsung SyncMaster 941BW")
	public static WebElement samsungsyncmastersearchresult;

	@FindBy(css="input[id='button-search']+h2+p")
	public static WebElement noresultsmessage;
}
