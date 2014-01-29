<?php
/**
 * @file
 * pgh_user_invite_rules.rules_defaults.inc
 */

/**
 * Implements hook_default_rules_configuration().
 */
function pgh_user_invite_rules_default_rules_configuration() {
  $items = array();
  $items['rules_user_invite_admin_notification'] = entity_import('rules_config', '{ "rules_user_invite_admin_notification" : {
      "LABEL" : "User invite admin notification",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules", "pgh_user_invite" ],
      "ON" : { "pgh_user_invite_invitations_sent" : [] },
      "DO" : [
        { "mail" : {
            "to" : "jay@designhammer.com",
            "subject" : "[inviting-user:name] has invited users to [business-unit:title]",
            "message" : "Client Admin [inviting-user:name] ([inviting-user:url]) has submitted the user invite form for the Business Unit [business-unit:title] ([business-unit:url]).\\r\\n\\r\\nThe following users have been newly created and added to the Business Unit. They have received Drupal welcome emails:\\r\\n\\r\\n[invited-users:value]\\r\\n\\r\\nThe following users are already in the system. A PGH Administrator must review these accounts and assign them manually to the Business Unit if appropriate. No changes have been made to these accounts and no messages have been sent:\\r\\n\\r\\n[pending-users:value]",
            "language" : [ "" ]
          }
        }
      ]
    }
  }');
  return $items;
}
