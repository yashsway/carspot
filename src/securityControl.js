function encrypt(text){
	var key = 3;
	var ciphertext = "";
	for(i = 0; i < text.length; i++){
		ciphertext += mapToLetter((key + mapToNum(text.charAt(i)))%53);
	}
	return ciphertext;
}
function decrypt(text){
	var key = 3;
	var plaintext = "";
	for(i = 0; i < text.length; i++){
		plaintext += mapToLetter((mapToNum(text.charAt(i))-key)%53);
	}
	return plaintext;
}
function mapToNum(letter){
	var num;
	switch(letter) {
		case 'a':
			num = 1
			break;
		case 'b':
			num = 2
			break;
		case 'c':
			num = 3
			break;
		case 'd':
			num = 4
			break;
		case 'e':
			num = 5
			break;
		case 'f':
			num = 6
			break;
		case 'g':
			num = 7
			break;
		case 'h':
			num = 8
			break;
		case 'i':
			num = 9
			break;
		case 'j':
			num = 10
			break;
		case 'k':
			num = 11
			break;
		case 'l':
			num = 12
			break;
		case 'm':
			num = 13
			break;
		case 'n':
			num = 14
			break;
		case 'o':
			num = 15
			break;
		case 'p':
			num = 16
			break;
		case 'q':
			num = 17
			break;
		case 'r':
			num = 18
			break;
		case 's':
			num = 19
			break;
		case 't':
			num = 20
			break;
		case 'u':
			num = 21
			break;
		case 'v':
			num = 22
			break;
		case 'w':
			num = 23
			break;
		case 'x':
			num = 24
			break;
		case 'y':
			num = 25
			break;
		case 'z':
			num = 26
			break;
		case 'A':
			num = 27
			break;
		case 'B':
			num = 28
			break;
		case 'C':
			num = 29
			break;
		case 'D':
			num = 30
			break;
		case 'E':
			num = 31
			break;
		case 'F':
			num = 32
			break;
		case 'G':
			num = 33
			break;
		case 'H':
			num = 34
			break;
		case 'I':
			num = 35
			break;
		case 'J':
			num = 36
			break;
		case 'K':
			num = 37
			break;
		case 'L':
			num = 38
			break;
		case 'M':
			num = 39
			break;
		case 'N':
			num = 40
			break;
		case 'O':
			num = 41
			break;
		case 'P':
			num = 42
			break;
		case 'Q':
			num = 43
			break;
		case 'R':
			num = 44
			break;
		case 'S':
			num = 45
			break;
		case 'T':
			num = 46
			break;
		case 'U':
			num = 47
			break;
		case 'V':
			num = 48
			break;
		case 'W':
			num = 49
			break;
		case 'X':
			num = 50
			break;
		case 'Y':
			num = 51
			break;
		case 'Z':
			num = 52
			break;
		default:
			num = 0
			break;
	}
	return num;
}
function mapToLetter(num){
	var letter;
	switch(num) {
		case 1:
			letter = 'a'
			break;
		case 2:
			letter = 'b'
			break;
		case 3:
			letter = 'c'
			break;
		case 4:
			letter = 'd'
			break;
		case 5:
			letter = 'e'
			break;
		case 6:
			letter = 'f'
			break;
		case 7:
			letter = 'g'
			break;
		case 8:
			letter = 'h'
			break;
		case 9:
			letter = 'i'
			break;
		case 10:
			letter = 'j'
			break;
		case 11:
			letter = 'k'
			break;
		case 12:
			letter = 'l'
			break;
		case 13:
			letter = 'm'
			break;
		case 14:
			letter = 'n'
			break;
		case 15:
			letter = 'o'
			break;
		case 16:
			letter = 'p'
			break;
		case 17:
			letter = 'q'
			break;
		case 18:
			letter = 'r'
			break;
		case 19:
			letter = 's'
			break;
		case 20:
			letter = 't'
			break;
		case 21:
			letter = 'u'
			break;
		case 22:
			letter = 'v'
			break;
		case 23:
			letter = 'w'
			break;
		case 24:
			letter = 'x'
			break;
		case 25:
			letter = 'y'
			break;
		case 26:
			letter = 'z'
			break;
		case 27:
			letter = 'A'
			break;
		case 28:
			letter = 'B'
			break;
		case 29:
			letter = 'C'
			break;
		case 30:
			letter = 'D'
			break;
		case 31:
			letter = 'E'
			break;
		case 32:
			letter = 'F'
			break;
		case 33:
			letter = 'G'
			break;
		case 34:
			letter = 'H'
			break;
		case 35:
			letter = 'I'
			break;
		case 36:
			letter = 'J'
			break;
		case 37:
			letter = 'K'
			break;
		case 38:
			letter = 'L'
			break;
		case 39:
			letter = 'M'
			break;
		case 40:
			letter = 'N'
			break;
		case 41:
			letter = 'O'
			break;
		case 42:
			letter = 'P'
			break;
		case 43:
			letter = 'Q'
			break;
		case 44:
			letter = 'R'
			break;
		case 45:
			letter = 'S'
			break;
		case 46:
			letter = 'T'
			break;
		case 47:
			letter = 'U'
			break;
		case 48:
			letter = 'V'
			break;
		case 49:
			letter = 'W'
			break;
		case 50:
			letter = 'X'
			break;
		case 51:
			letter = 'Y'
			break;
		case 52:
			letter = 'Z'
			break;
		default:
			letter = ' '
			break;
	}
	return letter;
}