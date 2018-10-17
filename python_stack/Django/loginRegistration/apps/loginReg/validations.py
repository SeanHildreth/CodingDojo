from pygeocoder import Geocoder
from datetime import *
import re
import bcrypt


def isValidEmail(email):
    if len(email) > 7:
        if re.match(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', email) != None:
            return True
    return False


def isValidUsername(username):
    if len(username) > 3:
        if re.match(r'^(?=.{4,64}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$', username) != None:
            return True
        return False
    return False


def isValidName(name):
    if len(name) > 1:
        if re.match(r'^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$', name) != None:
            return True
        return False
    return False


def isValidAddress(postData):
    address = postData['street'] + ', ' + postData['city'] + ', ' + postData['state'] + ' ' + postData['zip']
    if Geocoder(api_key='AIzaSyDzr1T7WmA1RsGcxc1aHNKKL5yEH1P5CEI').geocode(address).valid_address:
        return True
    return False


def isValidAge(bday):
    if bday == '':
        return False
    bdate = datetime.strptime(bday, '%Y-%m-%d')
    today = date.today()
    age = today.year - bdate.year - ((today.month, today.day) < (bdate.month, bdate.day))
    if age >= 13:
        return True
    return False


def isValidPassword(password):
    if re.match(r'^(?=\S{8,24}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^A-Za-z\s0-9])', password) != None:
        return True
    return False