#!/usr/bin/env wish

catch {console show}
puts hallo

ttk::button .bt -text "Ausgabe" -command { puts "Button geklickt"}
pack .bt
