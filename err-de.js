//JS abc2svg - German translation of the error codes:
//			Deutsche Übersetzung der Fehlercodes
// Bernhard Weichel 

// Terminologie
// 
// Tune - Stimme
// Staff - Notensystem
// head - Kopfbereich
// grace note "vorschlagnote" 
//


user.textrans = {
    "+: lyric without music": "+: Liedtext ohne Musik",
	"+: symbol line without music": "+: symbol line without music",
    "+: without previous info field": "+: ohne vorhergehends Info-Feld",
    "'{' in grace note": "'{' in Verzierungsnote",
    "'}', ')' or ']' missing in %%staves": "'}', ')' oder ']' fehlt in  %%staves",
    "',' lacking in annotation '@x,y'": "',' fehlt in Beschriftung  '@x,y'",
	"'$1' is not a note": "'$1' is keine Note",
    "'$1:' line ignored": "'$1:' Zeile ignoreirt",
    "$1: inside tune - ignored": "$1: innerhalb der Stimme ignoriert",
    "!$1! must be on a note": "!$1! muss an einer Note stehen",
    "!$1! must be on a note or a rest": "!$1! muss an einer Note oder Pause stehen",
    "!$1! must be on the last of a couple of notes": "!$1! muss an der letzten Notengruppe stehen",
    "!beamon! must be on a bar": "!beamon! muss an einem Taktstrich stehen",
    "!xstem! must be on a note": "!xstem! muss an einer Note stehen",
    "%%deco: abnormal h/wl/wr value '$1'": "%%deco: falscher Wert '$1'  für h/wl/wr",
    "%%deco: bad C function index '$1'": "%%deco: falscher C Funktionsindex '$1'",
    "%%deco: bad C function value '$1'": "%%deco: falscher C Funtionswert '$1'",
    "%%deco: cannot have a negative value '$1'": "%%deco: '$1' kann keinen egativen Wert haben",
    "%%multicol end without start": "%%multicol end ohne start",
    "%%multicol new without start": "%%multicol new ohne stand",
    "%%repeat cannot start a tune": "%%repeat kann nicht am Anfang einer Stimme stehen",
    "%%select ignored": "%%select ignoriert",
    "%%staffwidth too big": "%%staffwidth zu groß",
    "%%staffwidth too small": "%%staffwidth zu klein",
    "%%tune not treated yet": "%%tune noch nicht behandelt",
    "%%voice ignored": "%%voice ignoriert",
    "%%vskip cannot be negative": "%%vskip kann nicht negativ sein",
    "Bad !xstem!": "!xstem! fehlerhaft",
    "Bad %%setbarnb value": "fehlerhaft Wert für %%setbarnb",
    "Bad %%staff number $1 (cur $2, max $3)": "falsche %%staff Nummer $1 (cur $2, max $3)",
    "Bad %%staff value '$1'": "fehlerhafte %%staff Nummer '$1'",
    "Bad %%stafflines value": "fehlerhafter Wert für %%stafflines",
    "Bad %%staffscale value": "fehlerhafter Wert für %%staffscale",
    "Bad char '$1' in M:": "fehlerhaftes Zeichen '$1' in M:",
    "Bad character '$1'": "fehlerhaftes Zeichen '$1'",
    "Bad duration '$1' in M:": "fehlerhafte Dauer '$1' in M:",
    "Bad integer value": "fehlerhafte Ganzzahl",
	"Bad instr= value": "fehlerhafter Wert für instr=",
    "Bad L: value": "Fehlerhafter Wert für  L:",
    "Bad note in %%map": "fehlerhafte Note in %%map",
    "Bad page width": "fehlerhafte Seitenbreite",
	"Bad program in %%MIDI": "falsches Program in %%MIDI",
    "Bad scale value in %%font": "fehlerhafter scale - Wert in %%font",
    "Bad tie": "fehlerhafter Haltebogen",
    "Bad transpose value": "fehlerhafter Wert für transpose",
    "Bad user character '$1'": "falsches benutzerdefiniertes Zeichen '$1' in U:/%%user",
    "Bad value '$1' in %%linebreak - ignored": "fehlerhafter Wert '$1' in %%linebreak - ignoriert",
    "Bad value in $1": "fehlerhafter Wert in $1",
    "Bad voice ID in %%staves": "Fehlerhafte ID für Stimme in %%staves",
    "Bar in repeat sequence": "Taktstrich in Wiederholungssequenz",
    "Cannot have !$1! on a head": "!$1! kann nicht im Kopfbereich stehen",
    "Cannot have %%fullsvg inside a tune": "'%%fullsvg' kann nicht innerhalb einer Stimme stehen",
    "Cannot have a bar in grace notes": "Taktstrich in Vorschlagnote nicht erlaub",
	"Cannot have a broken rhythm in grace notes":
			"Cannot have a broken rhythm in grace notes",
    "Cannot have V:* in tune body": "Cannot have V:* in tune body",
    "Cannot read file '$1'": "File '$1' kann nicht gelesen werden",
    "Decoration ignored": "Dekoration ignoriert",
    "Empty line in tune header - ignored": "Leerzeile in Kopfbereich - ignoriert",
    "Erroneous end of voice overlap": "Fehlerhaftes Ende einer Stimme in überlagerten Stimmen",
    "Incorrect 1st value in %%repeat": "erster Wert fehlerhaft in %%repeat",
    "Incorrect 2nd value in %%repeat": "zweiter Wert fehlerhaft in %%repeat",
    "Invalid 'r' in tuplet": "'r' fehlerhaft in Tuplet",
    "Invalid decoration '$1'": "fehlerhafte Dekoration '$1'",
    "Invalid note duration $1": "Fehlerhafte Notendekoration '$1'",
    "Lack of ']'": "']' fehlt",
    "Lack of ending $1 in U:/%%user": "Ende von $1 fehlt in  U:/%%user",
    "Lack of starting ! or \" in U: / %%user": "! or \" fehlt in U: / %%user",
    "Line split problem - adjust maxshrink and/or breaklimit": "Probleme beim Aufteilen der Zeile - justiere maxshrink und/oder breaklimit",
    "Line too much shrunk $1 $2 $3": "Zeile zu stark geschrumpft $1 $2 $3",
    "Line underfull ($1pt of $2pt)": "Zeile nicht voll genug ($1pt of $2pt)",
    "Misplaced '$1' in %%staves": "'$1' fehlerhaft platziert in %%staves",
    "Misplaced dot": "fehlerhaft platzierter Punkt",
	"Mix of old and new transposition syntaxes":
				"Mix von alter und neuer Transponierungs-syntax",
    "No $1 after %%$2": "kein $1 nach %%$2",
    "No </defs> in %%beginsvg sequence": "kein </defs> in %%beginsvg squenz",
    "No </style> in %%beginsvg sequence": "kein </style> in %%beginsvg sequenz",
    "No accidental after 'exp'": "kein Vorzeichen nach 'exp'",
    "No end of decoration": "kein Ende der Dekoration",
    "No end of grace note sequence": "kein ende der Vorschlagnoten",
    "No end of guitar chord": "kein Ende des Akkordsymbols",
    "No end of repeat string": "kein Ende des Wiederholungszeichens",
    "No end of tuplet": "kein Ende des Tuplets",
    "No end of tuplet in this music line":
			"Kein ende des Tuplets in dieser Zeile",
    "No function for decoration '$1'": "keine Funktion für Dekoration '$1'",
    "No note before '-'": "keine Note vor '-'",
    "No note before '<'": "keine Note vor '<'",
    "No note in voice overlay": "keine Note in Stimmüberlagerung",
    "No read_file support": "Einlesen von Files nicht unterstützt",
    "No start of !$1!": "kein Start von  !$1!",
    "Not a note in grace note sequence":  "Keine Note in Sequenz von Vorschlagnoten",
    "Not an ASCII character": "kein ASCII - Zeichen",
    "Not enough measure bars for lyric line": "nicht genug Takte für Liedtextzeile",
	"Not enough measure bars for symbol line":
				"Not enough measure bars for symbol line",
    "Not enough measures for %%repeat": "nicht genug Takte für %%repeat",
    "Not enough parameters in %%map":  "nicht genug Parameter in  %%map",
    "Not enough symbols after repeat sequence":  "nicht genug Symbole nach einer Wiederholungssequenz",
    "Not enough notes/rests for %%repeat": "nicht genug Noten/Pausen für %%repeat",
    "Note too long": "Note zu lang",
    "Note too short": "Note zu kurz",
	"s: without music": "s: without music",
	"Too many elements in symbol line": "Too many elements in symbol line",
    "Too many include levels": "Verschachtelung für include zu tiefr",
    "Too many ties": "zu viele Haltebogen",
    "Too many words in lyric line": "zu viele Worte in Liedtextzeile",
    "Unknown bagpipe-like key": "unbekante Dudelsackartige Tonart",
    "Unknown clef '$1'": "unbekannter Schlüssel '$1'",
    "Unknown decoration '$1'": "unbekannte Dekoration '$1'",
    "Unknown font $1": "unbekannte schriftart '$1' ",
    "Unknown glyph: '$1'": "Unbekanntes Schriftsybol '$1'",
    "Unknown keyword '$1' in %%multicol": "unbekanntes Schlüsselwort  '$1' in %%multicol",
    "Unterminated string": "nicht abgeschlossene Zeichenkette",
    "Unterminated string in Q:": "nicht abgeschlossene Zeichenkette in Q:",
    "Voice overlay already started": "Stimmüberlagerung bereits gestartet",
    "w: without music": "w: ohne noten",
    "Wrong duration in voice overlay":  "fehlerhafte Notenwerte in Stimmüberlagerung"
}
