from pygeocoder import Geocoder
import pygeolib
from datetime import *
import re
from .api import api_key


def isValidEmail(email):
    if len(email) > 7:
        if re.match(r'^(?=.{7,255}$)[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', email) != None:
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
        if re.match(r'^(?=.{2,64}$)[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$', name) != None:
            return True
        return False
    return False


def validate_address(self):
    """
    Returns true if queried address is valid street address
    """
    return self.current_data['types'] == [u'street_address'] or self.current_data['types'] == [u'premise']

pygeolib.GeocoderResult.valid_address = validate_address


def isValidAddress(postData):
    keys = ['street', 'city', 'zip']
    for idx in keys:
        if postData[idx] == '':
            return False
    address = postData['street'] + ', ' + postData['city'] + ', ' + postData['state'] + ' ' + postData['zip']
    if Geocoder(api_key=api_key).geocode(address).valid_address: # You will need to provide your own google Geocoding API for this to work!
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
    if re.match(r'^(?=\S{8,32}$)(?=.*?\d)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^A-Za-z\s0-9])', password) != None:
        return True
    return False