import TestUtils from 'react-addons-test-utils';

export const setupComponent = (component) => {
    const renderer = TestUtils.createRenderer();
    renderer.render(component);

    const output = renderer.getRenderOutput();

    return {
        output,
        renderer
    };
};

export const renderIntoDocument = component => {
    return TestUtils.renderIntoDocument(component);
}