class Set {
    constructor () {
        this.set = [];
    }

    add(val) {
        if(!this.set.includes(val)) {
            this.set.push(val);
        } else {
            console.log('Value already in set!')
        }
    }

    remove(val) {
        for(x in this.set) {
            if(this.set[x] === val) {
                this.set.splice(x, 1);
                return
            }
        }
        throw "Value not in set!";
    }

}



module.exports = Set;


// - s.remove(x)                        : remove element x from s, exception if not present
// - s.discard(x)                       : remove element x from s, doesnt throw 
// - s.size()                           : returns number of elements in s
// - s.contains(e)                      : returns boolean e in s
// - s.union(t)                         : return union set of s and t
// - s.intersection(t)                  : return set intersection of s and t
// - s.difference(t)                    : return set of elements only in s
// - s.symmetric_difference(t)          : return set of elements not in s and t
// - s.pop()                            : remove and return arbitrary value from s, exception if empty
// - s.clear()                          : removes all elements from s
// - s.update(t)                        : adds t to s if not present
// - s.intersection_update(t)           : sets to only include elements in t and s
// - s.difference_update(t)             : sets s without elements found in t
// - s.symmetric_difference_update(t)   : sets to only have elements not in s AND t
// - s.missing(e)                       : returns boolean e NOT in s
// - s.issubset(t)                      : returns boolean all elements s in t
// - s.issuperset(t)                    : returnsbool all elements t in s
// - s.copy(t)                          : return a set containing same elements as s