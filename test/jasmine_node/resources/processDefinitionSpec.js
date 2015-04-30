'use strict';

describe('The ProcessDefinition resource', function() {
  var ProcessDefinition, processDefinition;

  it('does not blow when loading', function() {
    expect(function() {
      ProcessDefinition = require('./../../../lib/api-client/resources/process-definition');
    }).not.to.throw();
  });


  it('has a `path` static property', function() {
    expect(ProcessDefinition.path).to.eql('process-definition');
  });
});
