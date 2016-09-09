<?php
function periodIsLate($last, $today, $cycleLength) {
    return false;
}

periodIsLate(new DateTime('2016-07-13'), new DateTime('2016-08-16'), 35);
>
