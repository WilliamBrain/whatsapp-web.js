'use strict';

const PrivateChat = require('../structures/PrivateChat');
const GroupChat = require('../structures/GroupChat');
const Channel = require('../structures/Channel');

class ChatFactory {
    static create(client, data) {
        // [WAHA-DEBUG] Log what type of chat is being created
        console.log('[WAHA-DEBUG] ChatFactory.create - data.isGroup:', data.isGroup, 'data.isChannel:', data.isChannel, 'id:', data.id?._serialized);

        if (data.isGroup) {
            console.log('[WAHA-DEBUG] Creating GroupChat instance');
            return new GroupChat(client, data);
        }

        if (data.isChannel) {
            console.log('[WAHA-DEBUG] Creating Channel instance');
            return new Channel(client, data);
        }

        console.log('[WAHA-DEBUG] Creating PrivateChat instance (default fallback)');
        return new PrivateChat(client, data);
    }
}

module.exports = ChatFactory;
