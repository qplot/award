Score
=

Instructions for 38-score:
-
* revert admin view: **drush fr pgh_applications_view**
* revert score view: **drush fr pgh_awards_score_view**
* add score module: **drush en pgh_awards_score**
* latest database with points migrated !


Step 1
-
Migrate points, or get the latest database dump. This is to first make sure all points structure is there and all response has been updated with the new point structure.

Step 2
-
In order to view or test application’s score, you can visit **admin/applications** . This will list all the application with filters on the top, so that you can find one application very easily. Once you find an application, click score link to the right, you will end up with a page **admin/score/application/%app_id** with category scores listed if scores has been calculated in the past. If not, you can just click **Calculate** button on the top of the page and results will come back to you in 1-2 seconds.

Step 3
-
Metric score needs a bit additional setup. First you need to migrate metric, and after that, you can visit **admin/metric** to see all metrics. We need to turn off all JS calculation on the front, because most of metric formula uses JS calculation which is preventing us to update them through front-end (Ticket #?). There’s no additional thing that needs to be done to get metric score calculated. If metric is setup right, when you do Step 2, you should see metric score as well for each category. 

