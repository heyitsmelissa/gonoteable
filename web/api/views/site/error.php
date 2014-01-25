<?php
$this->pageTitle .= ' - Error';
?>

<div class="row">
	<div class="large-24 columns text-center">
		<h1><?php echo $code ?></h1>
		<div><?php echo CHtml::encode($message) ?></div>
	</div>
</div>