/**
 * @description       : 
 * @author            : pooran@test.SFDoc
 * @group             : 
 * @last modified on  : 07-30-2023
 * @last modified by  : pooran@test.SFDoc
**/
//On insert of new contact
trigger BillingAccountContactRole on Contact(after insert) {
  // Collect new contact ids
  Set<Id> accountIds = new Set<Id>();
  for (Contact contact : Trigger.new) {
    if (contact.AccountId != null) {
      accountIds.add(contact.AccountId);
    }
  }

  // Create a map of exisnting  account contact role to account ids
  Map<Id, AccountContactRole> existingRoles = new Map<Id, AccountContactRole>();
  for (AccountContactRole acrole : [SELECT AccountId, ContactId FROM AccountContactRole WHERE AccountId IN :accountIds AND Role = 'Billing']) {
    //Add to the map
    existingRoles.put(acrole.AccountId, acrole);
  }

  // New account contact role
  List<AccountContactRole> newacRoles = new List<AccountContactRole>();

  // Loop through the new Contacts
  for (Contact contact : Trigger.new) {
    //Check if there is no role already exist
    if (
      contact.AccountId != null && !existingRoles.containsKey(contact.AccountId)
    ) {
      // Create a new Billing AccountContactRole record
      AccountContactRole newacRole = new AccountContactRole(
        AccountId = contact.AccountId,
        ContactId = contact.Id,
        Role = 'Billing'
      );
      newacRoles.add(newacRole);
    }
  }

  // Insert
  if (!newacRoles.isEmpty()) {
    insert newacRoles;
  }
}
