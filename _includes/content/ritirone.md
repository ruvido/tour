{% if page.status == 'ok' %}
<!--
	{% capture thisInclude %}{% include messages/tour-intro.md %}{% endcapture %}
	{{ thisInclude | markdownify }}
-->

	{{content}}

<!--
	{% capture thisInclude %}{% include messages/tour-info.md map=page.map mobile=page.mobile %}{% endcapture %}
	{{ thisInclude | markdownify }}
-->

{% else %}
	{% capture thisInclude %}{% include messages/pending.md %}{% endcapture %}
	{{ thisInclude | markdownify }}
{% endif %}
