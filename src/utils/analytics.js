//Note: These events don't fire if you run gatsby develop, but they do fire under gatsby build
//Don't drive yourself crazy testing it in develop mode like I did.

export const trackGA = (eventCategory, eventAction, eventLabel = null, eventValue = null) => {

    if (!eventCategory) {
        throw new Error('eventCategory is required');
    }

    if (!eventAction) {
        throw new Error('eventAction is required');
    }

    try {
        if (ga) {
            ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue);
        }
    } catch (err) { }
}

