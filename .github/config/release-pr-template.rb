Release <%= Time.now %>
Changes included in next release:
<% pull_requests.each do |pr| -%>
<%=  pr.to_checklist_item %>
<% end -%>
