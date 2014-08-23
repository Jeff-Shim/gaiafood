<?php
require("phpsqlajax_dbinfo.php");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

// Opens a connection to a MySQL server
$connection=mysql_connect ('mysql.hostinger.kr', $username, $password);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($database, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}
$result = mysql_query('set names utf8');
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

$swlat = $_REQUEST['swlat'];
$swlng = $_REQUEST['swlng'];
$nelat = $_REQUEST['nelat'];
$nelng = $_REQUEST['nelng'];

// Select all the rows in the markers table
$query = "SELECT * FROM affiliate WHERE `lat` BETWEEN $swlat AND $nelat AND `lng` BETWEEN $swlng AND $nelng";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo '<affiliates>';

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  // ADD TO XML DOCUMENT NODE
  echo '<affiliate ';
  echo 'id="' . $row['id'] . '" ';
  echo 'name="' . parseToXML($row['name']) . '" ';
  echo 'description="' . parseToXML($row['description']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'phone="' . parseToXML($row['phone']) . '" ';
  echo 'openinghours="' . parseToXML($row['openinghours']) . '" ';
  echo 'website="' . parseToXML($row['website']) . '" ';
  echo 'lat="' . $row['lat'] . '" ';
  echo 'lng="' . $row['lng'] . '" ';
  echo 'discount1="' . parseToXML($row['discount1']) . '" ';
  echo 'discount2="' . parseToXML($row['discount2']) . '" ';
  echo 'badges="' . $row['badges'] . '" ';
  echo 'thumbnail="' . parseToXML($row['thumbnail']) . '" ';
  echo 'images="' . parseToXML($row['images']) . '" ';
  echo '/>';
}

// End XML file
echo '</affiliates>';

?>