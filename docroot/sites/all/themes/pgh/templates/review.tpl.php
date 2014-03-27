<?php
/**
 * @file
 * Provides template for displaying review.
 *
 * @author Fang Jin <fang@designhammer.com>
 */

  // dsm($app);
  // dsm($form);
?>


  <div id="reviewer-wrap"><div id="reviewer-wrap-inner">
  <div id="reviewer">

    <?php print render($page['content_top']); ?>

      <?php echo $form['header'] ?>

      <!-- Hospital Info Section -->
      <div id="hospital-wrap"><div id="hospital-wrap-inner">

        <div id="hospital-content-top">
        <h2><?php echo $app['institution'] ?>, <?php echo $app['city'] . ' ' . $app['state'] . ', ' . $app['zipcode'] ?></h2>
        <p class="institution-name"><?php echo $app['institution_name'] ?></p>
        </div>

        <div id="hospital-content-left" class="column">
          <h3>Primary Contact:</h3>
          <p><span class="label">
            <?php echo $app['primary_first'] . ' ' . $app['primary_last'] ?> 
            <?php if (!empty($app['primary_phone'])): ?>
              , <?php echo $app['primary_phone'] ?>
            <?php endif ?>
          </span></p>
          <p><span class="label"><?php echo $app['primary_email'] ?></span></p>
          <p>
            <?php if (!empty($app['beds'])): ?>
              <span class="label">Staffed Beds:</span> <?php echo $app['beds'] ?>
            <?php endif ?>
          </p>
          <p>
            <?php if (!empty($app['ors'])): ?>
              <span class="label">ORs:</span> <?php echo $app['ors'] ?></p>
            <?php endif; ?>
          <p><span class="label">FE Liaison: Not Implemented</span></p>
          <p><span class="label">Reviewer(s):</span> 
            <?php if (!empty($app['reviewers'])): ?>
              <?php echo $app['reviewers'] ?>
            <?php else: ?>
              Not Assigned
            <?php endif; ?>
          </p>
        </div>

        <div id="hospital-content-mid" class="column">
          <h3>Application Name: <?php echo $app['apptype'] ?></h3>
          <?php if (!empty($app['cares'])): ?>
            <p><span class="label">Number of Acute Care Hospitals in Systems:</span> <?php echo $app['cares'] ?> </p>
          <?php endif; ?>
          <?php echo $form['winning_pfcs'] ?>
          <?php echo $form['qualify'] ?>
          <?php echo $form['threshold_met'] ?>
        </div>

        <div id="hospital-content-right" class="column">
          <h3>Final Awards</h3>
          <?php echo $form['awards'] ?>
          <?php echo $form['submit'] ?>
        </div>

      </div></div>


      <!-- Scoring Roll-Up Section -->
      <div id="scores-wrap"><div id="scores-wrap-inner">
        <h2>Scoring Roll-Up/Overview</h2>

        <div class="scoring-group">
          <?php echo $app['score_view'] ?>
          <?php echo $form['comment'] ?>
        </div>

      </div></div>


      <!-- Category Section -->
      <div id="categories-wrap"><div id="categories-wrap-inner">
      <h2>Metric and Quality</h2>

        <?php foreach ($app['scores'] as $cat): ?>
          <?php if ($cat): ?>

            <div class="cat-group">

            <div class="column item-1 cat-title">
              <div class="<?php echo $cat['category_class'] ?>"><span></span><?php echo $cat['category_name'] ?></div>
            </div>
            <div class="column item-2">
              <p><span class="label">Auto Score:</span> <?php echo $cat['automatic'] ?> of <?php echo $cat['automatic_p'] ?> pts (<?php echo $cat['automatic_pc'] ?>%)</p>
              <p><span class="label">KPI Score:</span> <?php echo $cat['kpi'] ?> of <?php echo $cat['kpi_p'] ?> pts (<?php echo $cat['kpi_pc'] ?>%)</p>
            </div>
            <div class="column item-3">
              <p><span class="label">Metric Score:</span> <?php echo $cat['metric'] ?> of <?php echo $cat['metric_p'] ?> pts (<?php echo $cat['metric_pc'] ?>%)</p>
              <p><?php echo $form['quality_' . $cat['category_id']] ?></p>
            </div>
            <div class="column item-4">
              <p><span class="label">Category Score:</span> <?php echo $cat['final'] ?></p>
              <p><?php echo $form['case_study_' . $cat['category_id']] ?></p>
            </div>

            <div class="metric-wrap"><div class="metric-wrap-inner">
              <?php if (!empty($cat['metrics'])): ?>
                <h4>Metrics Overview</h4>
                  <div class="metrics-group-wrap">
                    <?php foreach ($cat['metrics'] as $metric): ?>
                      <div class="metrics-group"><span class="label"><?php echo $metric['description'] ?>:</span> <strong><?php echo $metric['value'] ?></strong></div>
                    <?php endforeach ?>
                  </div>
                <?php echo $form['comment_' . $cat['category_id']] ?>
              <?php endif ?>
            </div></div>

            </div>

          <?php endif ?>
        <?php endforeach ?>

      </div></div>


      <!-- Goals Section -->
      <div id="goals-wrap"><div id="goals-wrap-inner">
        <h2>Goals</h2>
        <?php foreach ($app['goals'] as $year => $goals): ?>

          <div class="goals-group">
            <table>
              <thead>
                <?php foreach ($goals['headers'] as $header): ?>
                  <th><?php echo $header ?></th>
                <?php endforeach ?>
              </thead>
              <tbody>
                <?php foreach ($goals['question_vals'] as $row): ?>
                  <tr>
                    <?php foreach ($row as $value): ?>
                      <td><?php echo $value ?></td>
                    <?php endforeach ?>
                  </tr>
                <?php endforeach ?>
              </tbody>
            </table>
          </div>

        <?php endforeach ?>
      </div></div>


    <?php echo $form['submit']; ?>

    <?php echo $form['footer'] ?>

  </div><!-- /#workgroup -->
  </div></div>
