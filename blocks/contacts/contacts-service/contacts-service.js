modules.define('contacts-service', ['inherit', 'vow'], function(provide, inherit, vow) {

// NOTE: stub data
var CONTACTS = {
    1 : {
        id : 1,
        name : 'luke',
        display_name : 'Luke Skywalker'
    },
    2 : {
        id : 2,
        name : 'solo',
        display_name : 'Han Solo'
    },
    3 : {
        id : 3,
        name : 'leia',
        display_name : 'Princess Leia'
    }
};

provide(inherit({
    __constructor : function() {
        this._data = CONTACTS;
        this._timeout = 100;
    },

    createContact : function(contact) {
        this._data.push(contact);
        return this.getContacts();
    },

    getContact : function(id) {
        var defer = vow.defer();

        setTimeout(function() {
            id in this._data?
                defer.resolve(this._data[id]) :
                defer.reject(new Error('unknown contact id ' + id));
        }.bind(this), this._timeout);

        return defer.promise();
    },

    getContacts : function() {
        var defer = vow.defer();

        setTimeout(function() {
            defer.resolve(this._data);
        }.bind(this), this._timeout);

        return defer.promise();
    },

    updateContact : function(id, newContact) {
        if(id in this._data) {
            newContact.id = id;
            this._data[id] = newContact;
            console.log('saved', newContact);
        }

        return vow.cast();
    },

    removeContacts : function(ids) {
        ids.forEach(function(id) {
            var data = this._data;
            if(id in data) {
                delete this._data[id];
            }
        }, this);

        return this.getContacts();
    }
}));

});
