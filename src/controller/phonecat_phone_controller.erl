-module(phonecat_phone_controller, [Req]).
-compile(export_all).

-default_action(index).

index('GET',[]) ->
    Phones = boss_db:find(phone, []),
    case Phones of
        [] ->
            { output, <<"[]">>, [{ "Content-Type", "application/json"}]};
        _Else ->
            { json, Phones }
    end.

