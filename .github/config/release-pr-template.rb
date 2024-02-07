chore(release): Release <%= Time.now %>
Changes:
<% pull_requests.each do |pr| -%>
<%=  pr.to_checklist_item %>
<% end -%>
