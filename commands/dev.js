module.exports = [
  {
    name: "c-dev", 
    code: `
    $reply[$messageID;yes]

    Created "djs", "eval" "ping" & "update" slash interaction successfully, sir.

    $createApplicationCommand[$guildID;djs;For evaluating your djs codes.;true;slash;code:enter the code.:true:3]

    $createApplicationCommand[$guildID;eval;For evaluating your functions.;true;slash;code:enter the code.:true:3]

    $createApplicationCommand[$guildID;update;Fastest way to update your codes without rebooting.;true;slash]

    $createApplicationCommand[$guildID;ping;Check bot's web socket speed and database.;true;slash]

    $onlyForIDs[$botOwnerID;This command is not for you, it's only for $userTag[$botOwnerID].]
    `
  }, 
  {
    name: "djs", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $interactionFollowUp[
***\`\`\`js
$djseval[$slashOption[code];yes]]
\`\`\`***

    $interactionDefer

    $onlyForIDs[$botOwnerID;{
	    "content": "This command is not for you, it's for only $userTag[$botOwnerID].",
	    "ephemeral": true, 
	    "options": {
		  "interaction" : true
		  }
	  }]
    `
  },
  {
    name: "eval", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $interactionFollowUp[$eval[$slashOption[code];yes;yes;yes;yes]]

    $interactionDefer

    $onlyForIDs[$botOwnerID;{
	    "content": "This command is not for you, it's for only $userTag[$botOwnerID].",
	    "ephemeral": true, 
	    "options": {
		  "interaction" : true
		  }
	  }]
    `
  }, 
  {
    name: "update", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $updateCommands

    $interactionReply[Updated codes, feel free to test again.;;;;;yes]

    $onlyForIDs[$botOwnerID;{
	    "content": "This command is not for you, it's for only $userTag[$botOwnerID].",
	    "ephemeral": true, 
	    "options": {
		  "interaction" : true
		  }
	  }]
    `
  }, 
  {
    name: "ping", 
    prototype: 'slash',
    type: 'interaction', 
    code: `
    $interactionReply[$pingms for web socket, $dbPingms for database.]
`
  }
]