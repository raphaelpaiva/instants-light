#!/usr/bin/perl

use strict;
use warnings;

open (OUTPUT, '>objects.txt');

my @files = <../sounds/*>;

for my $file (@files) {
    my $name = $file;
    $name =~ s/\.\.\/sounds\///;
    $name =~ s/\.ogg//;
    $name =~ s/_\d+//;
    
    $file =~ s/\.\.\///;

    print OUTPUT  $name.", ".$file."\n";
}

close (OUTPUT);
