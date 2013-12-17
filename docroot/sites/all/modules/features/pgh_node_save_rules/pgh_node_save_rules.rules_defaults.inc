<?php
/**
 * @file
 * pgh_node_save_rules.rules_defaults.inc
 */

/**
 * Implements hook_default_rules_configuration().
 */
function pgh_node_save_rules_default_rules_configuration() {
  $items = array();
  $items['rules_application_save_redirect'] = entity_import('rules_config', '{ "rules_application_save_redirect" : {
      "LABEL" : "Application save redirect",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules" ],
      "ON" : { "node_insert--application" : { "bundle" : "application" } },
      "DO" : [ { "redirect" : { "url" : "application\\/[node:nid]", "force" : 0 } } ]
    }
  }');
  $items['rules_business_unit_save_redirect'] = entity_import('rules_config', '{ "rules_business_unit_save_redirect" : {
      "LABEL" : "Business Unit save redirect",
      "PLUGIN" : "reaction rule",
      "OWNER" : "rules",
      "REQUIRES" : [ "rules" ],
      "ON" : { "node_insert--business_unit" : { "bundle" : "business_unit" } },
      "IF" : [
        { "NOT user_has_role" : {
            "account" : [ "site:current-user" ],
            "roles" : { "value" : { "4" : "4", "3" : "3" } },
            "operation" : "OR"
          }
        }
      ],
      "DO" : [ { "redirect" : { "url" : "dashboard", "force" : 0 } } ]
    }
  }');
  return $items;
}
