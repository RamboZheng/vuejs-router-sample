import env from 'env';

module.exports = {
    /**
     * debug info
     */
    d: function(mess) {
        if(env.openDebug && console != undefined) {
            console.log(mess);
        }
    },

    /**
     * error info
     */
    e: function(mess) {
        if(console != undefined) {
            console.error(mess);
        }
    }
};