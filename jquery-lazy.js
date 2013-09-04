var contactsArray = [
	{
		"email": "first@example.com",
		"first_name": "First",
		"last_name": "Name",
		"job_role": "A Job Title",
		"company": "A Company Name",
		"city": "the City",
		"stateProvince": "the State",
		"postalCode": "Some postal code",
		"phone_number": "5555555555",
		"lead_source": "source",
		"lead_source_detail": "details",
		"campaign_id": "Some id",
		"landing_page": "example.com/landingPage",
		"comment": "Some comment",
		"demo_link": "Link to demo",
		"form_type": "our form type",
		"form_product": "Example product",
		"form_page": "Example page",
		"match_loc": "Location"
	},
	//more objects here...
];

var i=0;
$("input[name='formInput[source]']").val(contactsArray[i].lead_source);
$("input[name='formInput[sourceDetail]']").val(contactsArray[i].lead_source_detail);
$("input[name='formInput[campaignId]']").val(contactsArray[i].campaign_id);
$("input[name='formInput[productInterest]']").val('Some string');
$("input[name='formInput[firstName]']").val(contactsArray[i].first_name);
$("input[name='formInput[lastName]']").val(contactsArray[i].last_name);
$("input[name='formInput[email]']").val(contactsArray[i].email);
$("input[name='formInput[phoneNumber]']").val(contactsArray[i].phone_number);
$("input[name='formInput[companyName]']").val(contactsArray[i].company);
$("input[name='formInput[jobTitle]']").val(contactsArray[i].job_role);
$("input[name='formInput[postalCode]']").val(contactsArray[i].postalCode);
$("select[name='formInput[jobRole]']").val(contactsArray[i].job_role);
$("textarea[name='formInput[comment]']").val(contactsArray[i].comment);
