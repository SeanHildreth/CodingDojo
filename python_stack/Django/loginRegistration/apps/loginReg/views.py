from django.shortcuts import render, HttpResponse, redirect

def index(request):
    try:
        if request.session['loggedin'] == True:
            return redirect('/success')
    except KeyError:
        pass
    context = {
        'states':{'AL':'Alabama', 'AK':'Alaska', 'AZ':'Arizona', 'AR':'Arkansas', 'CA':'California', 'CO':'Colorado', 'CT':'Connecticut', 'DE':'Delaware', 'FL':'Florida', 'GA':'Georgia', 'HI':'Hawaii', 'ID':'Idaho', 'IL':'Illinois', 'IN':'Indiana', 'IA':'Iowa', 'KS':'Kansas', 'KY':'Kentucky', 'LA':'Louisiana', 'ME':'Maine', 'MD':'Maryland', 'MA':'Massachusetts', 'MI':'Michigan', 'MN':'Minnesota', 'MS':'Mississippi0', 'MO':'Missouri', 'MT':'Montana', 'NE':'Nebraska', 'NV':'Nevada', 'NH':'New Hamsphire', 'NJ':'New Jersey', 'NM':'New Mexico', 'NY':'New York', 'NC':'North Carolina', 'ND':'North Dakota', 'OH':'Ohio', 'OK':'Oklahoma', 'OR':'Oregon', 'PA':'Pennsylvania', 'RI':'Rhode Island', 'SC':'South Carolina', 'SD':'South Dakota', 'TN':'Tennessee', 'TX':'Texas', 'UT':'Utah', 'VT':'Vermont', 'VA':'Viginia', 'WA':'Washington', 'WV':'West Virginia', 'WI':'Wisconsin', 'WY':'Wyoming', 'AS':'American Samoa', 'DC':'District of Columbia', 'GU':'Guam', 'MP':'Northern Mariana Islands', 'PR':'Puerto Rico', 'VI':'Virgin Islands'},
        'langs':['C#', 'Java', 'JavaScript', 'PHP', 'Python', 'Ruby', 'Swift']
    }
    keys = ['email', 'username', 'fname', 'lname', 'street', 'city', 'state', 'zip', 'bday', 'lang']

    for idx in keys:
        if idx not in request.session:
            request.session[idx] = ''

    return render(request, 'loginReg/index.html', context)