<?php
function in_asc_order($arr)
{
  for ($i = 1; $i < count($arr) ; $i++)
  {
    if ($arr[$i] < $arr[$i-1])
    {
      return (false);
    }

  }
  return true;
}
?>
