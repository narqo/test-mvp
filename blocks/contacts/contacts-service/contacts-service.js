modules.define('contacts-service', ['inherit', 'vow'], function(provide, inherit, vow) {

var CONTACTS = [
    {
        id : 1,
        name : 'luke',
        display_name : 'Luke Skywalker'
    },
    {
        id : 2,
        name : 'solo',
        display_name : 'Han Solo'
    },
    {
        id : 3,
        name : 'leia',
        display_name : 'Princess Leia'
    }
];

provide(inherit({
    __constructor : function() {
        this._data = CONTACTS;
        this._timeout = 100;
    },

    createContact : function(contact) {
        this._data.push(contact);

        return this.getContacts();
    },

    getContacts : function() {
        var defer = vow.defer();

        setTimeout(function() {
            defer.resolve(this._data);
        }.bind(this), this._timeout);

        return defer.promise();
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
