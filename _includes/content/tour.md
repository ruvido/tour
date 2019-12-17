{% if page.status == 'ok' %}
	
In un percorso di due giorni getteremo le basi per capire cosa vuol dire avere
una affettività risolta e capire il progetto di Dio sulla tua vita 🤩 

Ti aspettiamo!

<p></p>
<p></p>
<p></p>
<p></p>
<div class="centered-text">
<a href="#iscriviti" class="important centered-button">Iscriviti!</a>
</div>
<p></p>

	{{content}}

	{% capture thisInclude %}{% include messages/tour-info.md map=page.map mobile=page.mobile %}{% endcapture %}
	{{ thisInclude | markdownify }}

<p></p>
<p></p>
<p></p>
<p id="iscriviti"></p>
<div class="message"> 
<h2 class="zero-padding">Iscrizioni</h2>
<div>
	Per partecipare alla tappa, unisciti al canale <i>Telegram</i> del corso cliccando qui sotto:
</div>

<p></p>
<p></p>
<div class="centered-text">

	<a href="{{page.telegram}}" class="important centered-button">
		Iscrivimi ora
		<img style="height:2rem; width:auto; vertical-align:middle" src="/images/telegram.png"> 
	</a>
</div>
<p></p>
<p></p>


	<p class="small-text">
	Sul canale tutte le info esatte su ORARI e AVVISI.
	</p>

	<p class="small-text">
	L'iscrizione è <strong>obbligatoria</strong> e serve per avere una stima esatta
	del numero di persone che parteciperanno alla tappa. Quindi iscriviti solo quando sei sicuro di venire.  
	</p>
	
	<p class="small-text">
	<i>Annulla</i> l'iscrizione abbandonando il canale Telegram. 
	</p>

</div>

{% else %}

	{% capture thisInclude %}{% include messages/pending.md %}{% endcapture %}
	{{ thisInclude | markdownify }}

{% endif %}

